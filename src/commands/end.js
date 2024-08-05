import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '@/prisma/client';
import { randomWinnerSelector } from '@/utils/randomWinnerSelector';

export const endCommand = new SlashCommandBuilder()
  .setName('end')
  .setDescription('Ends an ongoing giveaway (Admin only)')
  .addStringOption((option) =>
    option
      .setName('giveaway-id')
      .setDescription('The ID of the giveaway')
      .setRequired(true),
  );

export async function execute(interaction) {
  const giveawayId = interaction.options.getString('giveaway-id');
  try {
    const giveaway = await prisma.giveaway.findUnique({
      where: {
        id: giveawayId,
      },
      include: {
        winners: true,
      },
    });

    if (!giveaway) {
      await interaction.reply('Giveaway not found.');
      return;
    }

    if (giveaway.status !== 'active') {
      await interaction.reply('This giveaway is not active.');
      return;
    }

    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      await interaction.reply('You do not have permission to end giveaways.');
      return;
    }

    const winners = randomWinnerSelector(giveaway.participants);
    await prisma.giveaway.update({
      where: {
        id: giveawayId,
      },
      data: {
        status: 'finished',
        winners: {
          connectOrCreate: winners.map((winner) => ({
            where: {
              userId: winner,
            },
            create: {
              userId: winner,
            },
          })),
        },
      },
    });

    await interaction.reply(`Giveaway ended successfully! The winners are: ${winners.map((winner) => `<@${winner}>`).join(', ')}`);
  } catch (error) {
    console.error('Error ending giveaway:', error);
    await interaction.reply('An error occurred while ending the giveaway. Please try again later.');
  }
}