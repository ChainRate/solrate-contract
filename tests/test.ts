import * as anchor from '@coral-xyz/anchor';
import type { ProcessingInstructions } from '../target/types/processing_instructions';
import { PublicKey } from '@solana/web3.js';

describe('review-test', () => {

  const reviewer1 = anchor.web3.Keypair.generate().publicKey;
  const reviewer2 = anchor.web3.Keypair.generate().publicKey;

  const programAccount = new PublicKey('FxDgbzSHngd27THEs7XMy7seVxnvw3qCom3UYqTEYF1Z');
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.ProcessingInstructions as anchor.Program<ProcessingInstructions>;

  it('Should store review successfully!', async () => {
    // Again, Anchor makes it super simple.
    await program.methods.storeReview(reviewer1,programAccount,"Review from reviewer1").accounts({}).rpc();
    await program.methods.storeReview(reviewer2,programAccount,"Review from reviewer2").accounts({}).rpc();
  });
});
