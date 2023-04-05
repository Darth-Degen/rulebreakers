import { PublicKey } from "@solana/web3.js"

export interface TokenAccount {
  mint: PublicKey
  amount: BigInt
}
