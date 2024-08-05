import { Message } from 'discord.js';
import { prisma } from '@/prisma/client';
import { giveawayService } from '@/services/giveawayService';

export default async (client, message) => {
  if (message instanceof Message) {
    try {
      // Check if the message is a command
      if (message.content.startsWith('/')) {
        // Handle the command
        // This will be handled by the interactionCreate.js file
      } else {
        // Check if the message is an entry to a giveaway
        const giveawayId = await giveawayService.getGiveawayIdFromMessage(message);
        if (giveawayId) {
          // Check if the message meets the entry requirements
          const giveaway = await prisma.giveaway.findUnique({
            where: {
              id: giveawayId,
            },
          });

          if (giveaway && giveaway.status === 'active') {
            // Check if the user is already participating
            if (!giveaway.participants.includes(message.author.id)) {
              // Check if the message meets the entry requirements
              if (await giveawayService.checkEntryRequirements(giveaway, message)) {
                // Add the user to the giveaway participants
                await giveawayService.enterGiveaway(giveawayId, message.author.id);

                // Send a confirmation message
                message.reply('You have successfully entered the giveaway!');
              } else {
                message.reply(
                  'Your message does not meet the entry requirements for this giveaway.',
                );
              }
            } else {
              message.reply('You are already participating in this giveaway.');
            }
          }
        }
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  }
};