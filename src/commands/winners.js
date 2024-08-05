import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '@/prisma/client';

export const winnersCommand = new SlashCommandBuilder()
  .setName('winners')
  .setDescription('Displays the winners of a giveaway')
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
    if (giveaway.winners.length === 0) {
      await interaction.reply('No winners have been selected for this giveaway yet.');
      return;
    }
    const winners = giveaway.winners.map((winner) => `<@${winner.userId}>`);
    await interaction.reply(`The winners of this giveaway are: ${winners.join(', ')}`);
  } catch (error) {
    console.error('Error fetching winners:', error);
    await interaction.reply('An error occurred while fetching winners. Please try again later.');
  }
}