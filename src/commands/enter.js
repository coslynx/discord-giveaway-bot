import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '@/prisma/client';

export const enterCommand = new SlashCommandBuilder()
  .setName('enter')
  .setDescription('Enter a giveaway')
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
    });

    if (!giveaway) {
      await interaction.reply('Giveaway not found.');
      return;
    }

    if (giveaway.status !== 'active') {
      await interaction.reply('This giveaway is not active.');
      return;
    }

    const isParticipating = giveaway.participants.includes(interaction.user.id);

    if (isParticipating) {
      await interaction.reply('You are already participating in this giveaway.');
      return;
    }

    await prisma.giveaway.update({
      where: {
        id: giveawayId,
      },
      data: {
        participants: {
          push: interaction.user.id,
        },
      },
    });

    await interaction.reply('You have successfully entered the giveaway!');
  } catch (error) {
    console.error('Error entering giveaway:', error);
    await interaction.reply('An error occurred while entering the giveaway. Please try again later.');
  }
}