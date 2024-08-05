import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '@/prisma/client';
import { giveawayService } from '@/services/giveawayService';

export const createCommand = new SlashCommandBuilder()
  .setName('create')
  .setDescription('Create a new giveaway (Admin only)')
  .addStringOption((option) =>
    option
      .setName('prize')
      .setDescription('The prize for the giveaway')
      .setRequired(true),
  )
  .addIntegerOption((option) =>
    option
      .setName('duration')
      .setDescription('The duration of the giveaway in seconds')
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('entry-requirements')
      .setDescription('The requirements for entering the giveaway (comma-separated)')
      .setRequired(false),
  )
  .addIntegerOption((option) =>
    option
      .setName('winners')
      .setDescription('The number of winners for the giveaway')
      .setRequired(true),
  );

export async function execute(interaction) {
  const prize = interaction.options.getString('prize');
  const duration = interaction.options.getInteger('duration');
  const entryRequirements = interaction.options.getString('entry-requirements')
    ? interaction.options.getString('entry-requirements').split(',')
    : [];
  const winners = interaction.options.getInteger('winners');

  try {
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      await interaction.reply('You do not have permission to create giveaways.');
      return;
    }

    const newGiveaway = await giveawayService.createGiveaway({
      prize,
      duration,
      entryRequirements,
      winners,
    });

    await interaction.reply(`Giveaway created successfully! ID: ${newGiveaway.id}`);
  } catch (error) {
    console.error('Error creating giveaway:', error);
    await interaction.reply(
      'An error occurred while creating the giveaway. Please try again later.',
    );
  }
}