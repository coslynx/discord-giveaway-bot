import { Client, TextChannel } from 'discord.js';
import { prisma } from '@/prisma/client';
import { logger } from '@/utils/logger';

export async function sendGiveawayStartNotification(client: Client, giveawayId: string) {
  try {
    const giveaway = await prisma.giveaway.findUnique({
      where: {
        id: giveawayId,
      },
    });

    if (!giveaway) {
      logger.error(`Giveaway with ID ${giveawayId} not found.`);
      return;
    }

    const channel = await client.channels.fetch(giveaway.channelId) as TextChannel;

    if (!channel) {
      logger.error(`Channel with ID ${giveaway.channelId} not found.`);
      return;
    }

    const message = `🎉 Giveaway Started! 🎉\n\nPrize: ${giveaway.prize}\nDuration: ${giveaway.duration} seconds\nEntry Requirements: ${giveaway.entryRequirements.join(', ') || 'None'}\nWinners: ${giveaway.winners}\n\nTo enter: ${giveaway.entryMethods.join(' or ') || 'Follow instructions in the giveaway message.'}`;

    await channel.send(message);
  } catch (error) {
    logger.error(`Error sending giveaway start notification: ${error}`);
  }
}

export async function sendGiveawayEndNotification(client: Client, giveawayId: string) {
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
      logger.error(`Giveaway with ID ${giveawayId} not found.`);
      return;
    }

    const channel = await client.channels.fetch(giveaway.channelId) as TextChannel;

    if (!channel) {
      logger.error(`Channel with ID ${giveaway.channelId} not found.`);
      return;
    }

    const winners = giveaway.winners.map((winner) => `<@${winner.userId}>`).join(', ');

    const message = `🎉 Giveaway Ended! 🎉\n\nPrize: ${giveaway.prize}\nWinners: ${winners}`;

    await channel.send(message);
  } catch (error) {
    logger.error(`Error sending giveaway end notification: ${error}`);
  }
}

export async function sendGiveawayReminderNotification(client: Client, giveawayId: string, timeRemaining: number) {
  try {
    const giveaway = await prisma.giveaway.findUnique({
      where: {
        id: giveawayId,
      },
    });

    if (!giveaway) {
      logger.error(`Giveaway with ID ${giveawayId} not found.`);
      return;
    }

    const channel = await client.channels.fetch(giveaway.channelId) as TextChannel;

    if (!channel) {
      logger.error(`Channel with ID ${giveaway.channelId} not found.`);
      return;
    }

    const message = `⏰ Giveaway Reminder! ⏰\n\nThis giveaway ends in ${timeRemaining} seconds.\n\nPrize: ${giveaway.prize}`;

    await channel.send(message);
  } catch (error) {
    logger.error(`Error sending giveaway reminder notification: ${error}`);
  }
}