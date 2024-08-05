import { InteractionType } from 'discord.js';
import { prisma } from '@/prisma/client';
import { commandHandler } from '@/utils/commandHandler';

export default async (client, interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    await commandHandler(client, interaction);
  }
};