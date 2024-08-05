import { Client } from 'discord.js';
import { prisma } from '@/prisma/client';
import { logger } from '@/utils/logger';

export default async (client) => {
  try {
    // Log the bot's username and ID to the console
    logger.info(`Logged in as ${client.user.tag} (${client.user.id})`);

    // Check if the database is connected
    if (!prisma) {
      logger.error('Unable to connect to database');
      process.exit(1);
    }

    // Register slash commands
    await client.application.commands.set(
      [
        {
          name: 'create',
          description: 'Create a new giveaway (Admin only)',
          options: [
            {
              name: 'prize',
              description: 'The prize for the giveaway',
              type: 3, // STRING
              required: true,
            },
            {
              name: 'duration',
              description: 'The duration of the giveaway in seconds',
              type: 4, // INTEGER
              required: true,
            },
            {
              name: 'entry-requirements',
              description: 'The requirements for entering the giveaway (comma-separated)',
              type: 3, // STRING
              required: false,
            },
            {
              name: 'winners',
              description: 'The number of winners for the giveaway',
              type: 4, // INTEGER
              required: true,
            },
          ],
        },
        {
          name: 'enter',
          description: 'Enter a giveaway',
          options: [
            {
              name: 'giveaway-id',
              description: 'The ID of the giveaway',
              type: 3, // STRING
              required: true,
            },
          ],
        },
        {
          name: 'end',
          description: 'Ends an ongoing giveaway (Admin only)',
          options: [
            {
              name: 'giveaway-id',
              description: 'The ID of the giveaway',
              type: 3, // STRING
              required: true,
            },
          ],
        },
        {
          name: 'winners',
          description: 'Displays the winners of a giveaway',
          options: [
            {
              name: 'giveaway-id',
              description: 'The ID of the giveaway',
              type: 3, // STRING
              required: true,
            },
          ],
        },
        {
          name: 'help',
          description: 'Shows a list of available commands',
        },
        {
          name: 'dashboard',
          description: 'Redirects to the admin dashboard',
        },
      ],
      process.env.DISCORD_GUILD_ID,
    );

    logger.info('Slash commands registered successfully');
  } catch (error) {
    logger.error('Error handling ready event:', error);
  }
};