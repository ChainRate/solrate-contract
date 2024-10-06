use anchor_lang::prelude::*;
declare_id!("FxDgbzSHngd27THEs7XMy7seVxnvw3qCom3UYqTEYF1Z");

#[program]
pub mod processing_instructions {
    use super::*;

    pub fn storeReview(ctx: Context<Initialize>,reviewer: Pubkey, program_account: Pubkey, message: String) -> Result<()> {
        
        msg!("Function store_review called!");
        msg!("Reviewer Account Address: {}", reviewer);
        msg!("Target Program Account Address: {}", program_account);
        msg!("Review Message: {}", message);

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}