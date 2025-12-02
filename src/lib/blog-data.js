// ========================= BLOG DATA =========================

export const blogPosts = [
  {
    id: 1,
    slug: "how-to-build-predictable-sales-pipeline",
    title: "How to Build a Predictable Sales Pipeline in 90 Days",
    excerpt:
      "Stop guessing. Learn the system that turns unpredictable revenue into consistent monthly growth.",
    author: "Sandeep Gupta",
    date: "2024-01-15",
    category: "Sales Systems",
    readTime: "8 min read",
    image: "/sales-pipeline-dashboard.png",
    content: `
# How to Build a Predictable Sales Pipeline in 90 Days

Most SME founders struggle with revenue forecasting. One month you close 5 deals, the next month you're chasing leads that go cold. Sound familiar?

The truth is: **predictable revenue isn't luck. It's a system.**

In this guide, I'll walk you through the exact framework we use with our clients to transform chaotic, unpredictable sales into a reliable machine that generates consistent revenue month after month.

## The 3-Step Framework

### Step 1: Audit Your Current Pipeline (Week 1-2)

Before you can build something predictable, you need to understand what's broken.

Look at your last 12 months of sales data:
- How many leads did you generate each month?
- What percentage converted to customers?
- How long was the average sales cycle?
- Where did deals fall apart?

This data is your baseline. It tells you exactly where to focus.

### Step 2: Design Your Ideal Sales Process (Week 3-4)

Once you know what's broken, it's time to design the fix.

Your sales process should answer:
- How many leads do we need each month to hit our revenue target?
- How many of those leads will become qualified opportunities?
- How many opportunities will close?
- What's our average deal size?

For example, if you need ₹50 lakh in revenue and your average deal is ₹10 lakh, you need 5 closes per month.  
If your win rate is 20%, you need 25 qualified opportunities.  
If your qualification rate is 30%, you need 83 leads.

Now you have a clear target.

### Step 3: Build Systems to Hit Those Numbers (Week 5-12)

This is where most people fail. They know the numbers but don't have the systems to hit them.

You need systems for:
- **Lead Generation**
- **Qualification**
- **Sales Process**
- **Deal Management**
- **Coaching**

Without these, you're back to chaos.

## Common Mistakes That Kill Predictability

### Mistake 1: Not Qualifying Properly  
Your team spends weeks on deals that were never going to close.

### Mistake 2: No Lead Generation System  
Your pipeline is unpredictable because your lead flow is unpredictable.

### Mistake 3: One Rep Carries the Pipeline  
A system should not depend on one person.

### Mistake 4: No Pipeline Reviews  
Your forecast becomes guesswork.

## The 90-Day Timeline

**Days 1–14: Audit**  
Collect data → identify problems → set targets

**Days 15–30: Design**  
Build process → lead metrics → qualification system

**Days 31–60: Build**  
Launch lead gen → train team → weekly reviews

**Days 61–90: Optimize**  
Fix gaps → improve → scale

## The Bottom Line

Predictable revenue isn't complicated. Most SMEs simply never build the system.

If you're tired of guessing, it's time to build the system.

Book a call — let's talk about your predictable pipeline.
`,
  },

  {
    id: 2,
    slug: "sales-team-qualification-guide",
    title: "The Sales Qualification Guide: BANT Framework That Works",
    excerpt:
      "Stop wasting time on dead deals. Master BANT qualification and close faster.",
    author: "Sandeep Gupta",
    date: "2024-01-08",
    category: "Sales Skills",
    readTime: "6 min read",
    image: "/sales-qualification-framework.png",
    content: `
# The Sales Qualification Guide: BANT Framework That Works

Your salespeople are busy. Meetings every day. Emails. Demos.

But nothing closes.

Not because your team is bad — but because they’re not qualifying properly.

## What is BANT?

BANT stands for:
- **B**udget
- **A**uthority
- **N**eed
- **T**imeline

If any element is missing → it's NOT a real opportunity.

## Budget

If they don't have money, nothing else matters.

### Questions:
- Who controls the budget?
- Is budget approved?
- What is the budget range?

### Red Flags:
- “We might get budget next quarter”
- “It depends on the price”

## Authority

You're speaking to someone who **likes** the product but **can’t buy**.

### Questions:
- Are you the decision-maker?
- Who else is involved in approval?

### Red Flags:
- “I need to check with my manager”
- “Our CEO decides everything”

## Need

A prospect in a meeting does NOT mean they have a clear need.

### Questions:
- What problem are you solving?
- Why now?
- What happens if you don't fix this?

### Red Flags:
- “We're just exploring”
- “It might help”

## Timeline

Reps misread timelines constantly.

### Questions:
- When do you need this in place?
- What's driving this timeline?

### Red Flags:
- “Sometime this year”
- “We're not sure yet”

## How to Use BANT in Your Sales Process

### Early Call  
Check **Need** + **Timeline**

### After Demo  
Confirm **Authority**

### Before Proposal  
Confirm **Budget**

## The Bottom Line

BANT won’t close deals for you — but it will stop you from wasting time on dead deals.

If you want to implement this in your team, let’s talk.
`,
  },
]

// ========================= HELPERS =========================

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
}

export function getBlogPostsByCategory(category) {
  return blogPosts.filter((post) => post.category === category)
}

export function getCategories() {
  return [...new Set(blogPosts.map((post) => post.category))]
}
