### getting from 0 to 1 for zero knowledge products

---

### decentralized identity 

An observation made throughout all of the ideas below is that identity is a core concept that enables all of them to work.

OxParc has some great writing on identity:
- [https://0xparc.org/blog/zk-id-1](https://0xparc.org/blog/zk-id-1)
- [https://0xparc.org/blog/zk-id-2](https://0xparc.org/blog/zk-id-2) 

Two problems emerge in the identity space:
1. Can I trust your claim? Are you who you are, a unique human or corporation?
2. Can I trust your data? Are you truthful about what you're providing?

Some examples of claims and attestations in the article:
- "I'm a trustworthy debtor: I've paid off large loans from three trusted banks in a timely fashion, though I won't reveal the banks or what the loans were taken out for."
- "I'm a respected community member: Though I am writing this post anonymously, under my named account I have accumulated over 10000 upvotes on this forum."
- "I'm a long-term crypto token collector: Ethereum addresses that I control collectively hold at least two NFTs from the Dark Forest Valhalla collection, and at least 100 ETH."

Identity is complex:
- What is identity?
- What constitutes a valid proof/attestation of identity? Who can issue attestations?
- Who is the custodian associated with your identity?
- What records, artifacts, attestations signal identity and reputation (identity over time)?

Design patterns in the identity space:
- What is the correct abstraction for identity?
- What are common identity claims that people care about making?
- What tool and standard should be expected from future zk wallets?
- What interfaces with zk identity enabled apps need to conform to?
- What devices can generate zk proofs?

Some uses for decentralized identities:
- private airdrops
- eligibility for government services based on identification
- on-chain snapshot vote aggregation
- anonymous but credible attestations

---

### shielded transactions

The most well-known idea for zero knowledge is creating shielded transactions. Individuals who are sending money to one another can do so in a private way. As an example, Alice can send money to Bob with neither of their addresses or transaction amounts revealed. Zcash helps to enable this kind of transaction.

---

### compliance 

Compliance is a big opportunity zone for zero knowledge technology. If setup correctly, compliance should be easy as pie. Audits would be abstracted away in smart contracts, reduced to a boolean. A proof would be constructed that asserts that an individual, party, or company is within parameters on a ruleset, with no information about the requirements or inputs revealed.

---

### advertising

Green advertising can also benefit from zero knowledge technology. One of the problems present in advertising today is that too much user privacy is sacrificed in order to serve relevant advertisements. 

If users can control the degree of information that they reveal to advertising companies/algorithms or create anonymous personals, then advertising companies can still serve relevant content without user data.

But why is a proof necessary in this case? 

An advertiser could use a zero-knowledge proof to prove to a verifier, like an ad exchange, that a user meets certain targeting criteria (e.g. is in a particular age range or has expressed interest in a particular type of product) without revealing any other personal information about the user. 

But if an advertiser knows that a user meets certain targeting criteria, that's still information exchanged, right?

---

### eligibility

The entire idea of eligibility can be made better using zero knowledge technology. This takes its form as insurance, credit scores, and identity verification. Paired with machine learning or any type of model, zk allows a party to assert the results of a machine learning model without revealing information about the model itself or the user data that was used within the model.

From this, insurance providers can be removed as middlemen or their reach can be limited to only creating equitable health models. One possible shift is the idea that the insurance market turns into a marketplace of white labeled zk health models. This means a user's pre-existing conditions, prior uses of health insurance, medical records, etc are used in calculating eligibility and claim amounts but insurance companies only see a limited set of user data and can only verify that they were eligible for a certain set of services.

Zero knowledge can also be used on traditional financial concepts, such as a credit score. If users own the data about how their score is constructed, e.g, number of on-time payments, number of accounts, total credit, number of cards, number of hard audits, etc, it should be viable that zk can help protect that information and generate a proof that tells banks/lendors "yes, Alice is eligible for a $15k loan or applying for this new Chase card," without revealing anything about the user or the model itself. 

These "eligibility" examples all follow a similar pattern where zk technlogy can be similarly used to protect user information while asserting proof of:

- clinical study eligibility
- age
- citizenship
- membership
- [human](https://worldcoin.org/the-worldcoin-protocol)
- vote
- crash analytics

---

### identity

Identity is often quoted as something zero knowledge can enhance. The first and large hurdle with solving identity is ensuring that the institutions that supply the "hard" data of identity, namely, name, date of birth, passport number, and other official government histories are onboard with using a new technological model. The other side of identity, the multi-dimensional soft data of a person, such as created content, what you sound like, how you write, is information that needs to be incorporated over time. The supply side for institutions will be much harder as they must adopt the systems that users can use. Identity remains a data engineering problem first. 

---

### image verification

The use of zero knowledge technology in image verification is also possible. Dan Boneh and several of his graduate students have been working on a system that takes an "official" image (one that has been cryptographically signed by a secure source) and a proof that attests that the original image has been [cropped/expanded/shrunk]. The idea is for news sources to cite cryptographic proof of geo-located photos even if they decide to modify them for their own use. Even with 30 MB photos, verification of the proof takes approximately 10 seconds. The challenge now is to do the same with video files, which are much bigger. 

---

### trusted setups 

Zero knowledge proofs can also be used for trusted setups using on-chain storage to update the commitments and verify proofs. Data availability then becomes the primary problem.

(Investigate more here).

---

### DAO treasury management

Zero knowledge proofs can also be used for DAO treasury management. Traditionally, the budgetary constraints for a DAO are all public. There are some solutions to keep treasuries anonymous. One is to have a smart contract that aggregate multiple DAO treasuries so there is some anonymity preserved. With zero knowledge technology, a DAO can generate proofs to claim that certain treasury deposits are owned by them, while keeping the amount (and to some extent the roadmap) completely anonymous.

(Investigate more here).

---

### tornado cash

Let's go through Tornado Cash (TC) and see where zero knowledge could have helped. With Tornado Cash, Dan Boneh talks about two ways that TC could've achieved legitimacy. He reviews three methods:

1. a sanctions list
2. withdrawal screening
3. viewer keys

A sanctions list essentially places a detected deposit address on a sanctions list when they deposit into a tornado pool. The problem with this solution is, while well-intentioned, it doesn't really solve the problem. The funds have been added. The deposit address that was added to the sanctions list can no longer add funds, but the bad actor can still withdraw from the mixing pool after a specified amount of time. The bad money still gets to where it needs to go.

Withdrawal screening can utilize the power of zero knowledge proofs. Users would submit an exclusion proof certifying that their original address was not placed on the sanctions list, which would allow them to withdraw. Bad actors who do not submit this proof cannot prove that their deposit address is off the sanctions list and cannot withdraw, which means their funds would be locked up forever in the pool.

The third case would be to use viewer keys (like a TSA airport lock), but again, this entails possible centralization and abuse of powers problems. Who holds these private keys? Where are they stored? Who has access to view the data?

---

### financial auditing

With the recent collapse of FTX, zero knowledge could have helped with creating transparency around a company's financials. Imagine a proof that attests confirmation of assets over obligations, and these confirmations can also be viewed by and contributed to from individual consumers. Consumers can check that their transactions were indeed included in the higher level "proof of solvency". This proof of solvency can be run everyday in order for the company to remain up to date and compliant. 

Of course, fast loans can possibly bypass these results, but these are kinks to be worked out. 

(This is really interesting, investigate more).

---

### web3 estate planning

Zero knowledge technology could be instrumental in disrupting the estate planning space. 

Estate planning could unlock many of the techniques involving on-chain dead-man switch setups and preserve the privacy of secrets before and after a life event trigger.

You can hide asset ownership and destinations and only reveal the necessarily information following death. This has the added benefit of keeping declarations anonymous.

Zero knowledge technology can also help with double assurances and other protections to stop rogue lawyers as well. 

Perhaps working with a hardware integration like Ledger in a combined product could be useful as an estate packing planning bundle. 

---

### learning zk

**[How do you protect your crypto through privacy?](https://www.youtube.com/watch?v=XpRzKqEfpP4)**

1. You can't add privacy after the fact.

If you change the mental model from "adding privacy" to "leaking information", the way we think about privacy as a feature add-on doesn't make sense. If you leak information, the information is leaked. Using a band-aid doesn't undo blood loss. Peeing in a pool means you have to drain the entire thing to un-contaminate it. Start with privacy and not leaking information to start.

2. Decoys don't solve the problem. 

A common method of obfuscating transactions is to use a pool. Let's say I buy something from the store. If my account is debited $10 and the store's account is later credited $10, it's pretty easy to piece the puzzle together. Decoys (e.g ring signatures) are a situation where my $10 debit is mixed together with information from some n number of other $10 debits. Later, when the store is credited $10, it's not readily apparent who actually got debited. Problem is, it's not zero knowledge. The fact that an analyst can look at this and determine there were 11 possible debits means there's information leakage. If they go back into history and look at more transactions, there's significant non-zero chance that they can do a trace analysis and find more information about you or your habits. Privacy fucked.

3. You can't add privacy to money in flight. Privacy comes from shielded money at rest. 

Anytime you transact on a blockchain (e.g Bitcoin), you're already leaking a large amount of data about yourself. How much you spent, what the to and from addresses were, when it occurred, and your entire transaction history. That's the point of a distributed public ledger. 

Privacy in a currency sense is best done when holding funds in a shielded asset. Why holding? Time increases the anonymity set. If you buy $10 of an asset and then immediately spend that asset, the pattern is obvious - this person buys what is needed and then uses it, even if nothing about you is known. If you buy $10 of an asset, wait a month, then spend it, someone who tries to piece together who is buying and who is spending has to look at a month's worth of user data. Time provides anonymity. 

---

**[What is a fraud proof as compared to a validity proof?](https://www.alchemy.com/overviews/optimistic-rollups#what-is-the-difference-between-fraud-proofs-and-validity-proofs-2)**

A fraud proof proves that a state transition (read: transaction) is invalid. This is "optimistic" in the sense that the transaction is assumed to be valid unless proven false. You can think of this as an "innocent until proven guilty" frame of thinking. A fraud proof is only necessary if a verifier wants to challenge a state transition, and these are computed on-chain using published rollup data. Optimistic rollups use fraud proofs.

A validity proof (zero-knowledge proof) proves a state transition to be valid or invalid. This is "pessimistic" in the sense that the transition is not assumed to be valid - every transaction has to be checked for its validity. These are computed off-chain on the rollup and then verified on the Ethereum mainnet. Zk rollups use validity proofs.

---

**[What is an optimistic rollup?](https://www.alchemy.com/overviews/optimistic-rollups#what-are-optimistic-rollups-2)**

Optimistic rollups are a layer 2 (L2) construction that improves throughput and latency on Ethereum's base layer by moving computation and data storage off-chain. An optimistic rollup processes transactions off-chain, which reduces traffic on the Ethereum base layer and helps with scalability. These transactions are then "rolled up" into batches to be submitted to the Ethereum mainnet.

---

**[What is a zk rollup?](https://www.alchemy.com/overviews/optimistic-rollups#what-is-the-difference-between-fraud-proofs-and-validity-proofs-2)**

Zero-knowledge rollups are a layer 2 scaling solution that uses cryptographic validity proofs to scale computation. Each batch of transactions comes with a cryptographic proof (SNARK) computed off-chain that is verified by an Ethereum smart contract on-chain. This is the "pessimistic" method, where every single transaction is fully verified by all full Ethereum nodes before a block is finalized. This means transactions can be declared valid immediately, without waiting for a challenge.

---

**What is a zero knowledge proof?**

A zero knowledge proof (ZKP) is a way to prove you know something without revealing what it is that you know. 

An example of a simple ZKP identity system is how a bouncer checks your identification to ensure that you're of legal drinking age to enter the bar. In a ZKP scenario using cryptographic methods, the bouncer would know if you were of age or not, but no information about your name, address, birthdate, (or anything else on your driver's license) would be revealed. 

---

**What is a zkSNARK?

A zk-SNARK is a "zero-knowledge succinct non-interactive argument of knowledge".

Let's break that down:
- zero-knowledge - no information leakage, proofs do not reveal the witness (secret)
- succinct - proofs are small and verification is fast
- non-interactive - no interaction is necessary between prover and verifier
- argument - soundness holds against a polynomially-bounded verifier

---

**What is the trusted setup, common reference string, and the Powers of Tau?**

Let's start with some definitions.

A prover is a programmable module that generates zero-knowledge proofs and does the cryptographic computation required for some applications.

Second, generating and verifying any zkSNARK proof requires a common reference string (CRS) generated in advance. This can be thought of as creating a secret that only the system "knows" - any person with knowledge of how the CRS was generated would be able to forge proofs, and therefore break soundness.

If someone had access to the secret randomness used to generate these parameters, they would be able to create false proofs that would look valid to the verifier. 

We refer to this as the "[Powers of Tau](https://zeroknowledge.fm/the-power-of-tau-or-how-i-learned-to-stop-worrying-and-love-the-setup/)", and it's the general setup for all circuits up to a given size. The second part of the setup after the Powers of Tau converts the output from the first phase into a relation-specific CRS. In this scheme a coordinator is used to manage messages between the participants.

There are zero knowledge proof constructions which DO NOT require a CRS, such as STARKs and Bulletproofs. However, zkSNARKs smaller in proof size and can be verified much faster, which means more scalable computation speeds.

Generating these parameters in a trusted, centralized manner is possible, but incompatible with the ethos of blockchain and the goals of decentralization. 

So, what's a decentralized way to generate the CRS? 

The preferred technique is multi-party computation (MPC). MPC ensures that no single party is able to gain knowledge of the underlying mathematical structure of the CRS, by requiring the generation process to be shared across many independent participants. Of course, there is always the probability of bad actors, but if one aims to maximize the number of honest participants, then the likelihood that a setup is broken from dishonestly remains negligible.

