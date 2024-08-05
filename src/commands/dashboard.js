import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '@/prisma/client';

export const dashboardCommand = new SlashCommandBuilder()
  .setName('dashboard')
  .setDescription('Redirects to the admin dashboard');

export async function execute(interaction) {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  await interaction.reply(`The admin dashboard is available here: ${baseUrl}/dashboard`);
}