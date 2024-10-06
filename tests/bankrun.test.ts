import { describe, it } from 'node:test';
import * as anchor from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import { BankrunProvider } from 'anchor-bankrun';
import { startAnchor } from 'solana-bankrun';
import type { ProcessingInstructions } from '../target/types/processing_instructions';

const IDL = require('../target/idl/processing_instructions.json');
const PROGRAM_ID = new PublicKey(IDL.address);

describe('review-test', async () => {
  const context = await startAnchor('', [{ name: 'processing_instructions', programId: PROGRAM_ID }], []);
  const provider = new BankrunProvider(context);
  const programAccount = new PublicKey('FxDgbzSHngd27THEs7XMy7seVxnvw3qCom3UYqTEYF1Z');
  
  const reviewer1 = anchor.web3.Keypair.generate().publicKey;
  const reviewer2 = anchor.web3.Keypair.generate().publicKey;

  const payer = provider.wallet as anchor.Wallet;
  const program = new anchor.Program<ProcessingInstructions>(IDL, provider);

  it('Should store review successfully!', async () => {
    // Anchor makes it super simple.
    await program.methods.storeReview(reviewer1,programAccount,"Review from reviewer1").accounts({}).rpc();
    await program.methods.storeReview(reviewer2,programAccount,"Review from reviewer2").accounts({}).rpc();
  });
});
