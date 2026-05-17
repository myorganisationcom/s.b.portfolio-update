/**
 * Generic website form submissions that are not scored diagnosis leads.
 */

import { getPrisma } from '../services/prisma.js';

export async function createFormSubmission(data) {
  const submission = await getPrisma().formSubmission.create({
    data: {
      formType: data.formType,
      name: data.name,
      email: data.email || null,
      phone: data.phone || null,
      organisation: data.organisation || null,
      designation: data.designation || null,
      businessStage: data.businessStage || null,
      goals: data.goals || null,
      businessType: data.businessType || null,
      revenue: data.revenue || null,
      challenge: data.challenge || null,
      otherChallenge: data.otherChallenge || null,
      investment: data.investment || null,
      metadata: data.metadata ?? null,
    },
  });

  return {
    id: Number(submission.id),
  };
}
