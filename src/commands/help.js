import { SlashCommandBuilder } from 'discord.js';

export const helpCommand = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Shows a list of available commands');

export async function execute(interaction) {
  await interaction.reply(`Here are the available commands:\n
  /create: Create a new giveaway.
  /enter: Enter an existing giveaway.
  /end: End an ongoing giveaway (Admin only).
  /winners: View the winners of a giveaway.
  /dashboard: Access the Admin Dashboard.
  /help: Show this help message.
  `);
}