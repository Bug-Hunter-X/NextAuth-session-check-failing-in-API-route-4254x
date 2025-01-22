# NextAuth Session Check Failing in API Route

This repository demonstrates a common issue encountered when using NextAuth.js for authentication in Next.js API routes. The problem arises when the session check within the API route consistently returns null, even though the user has successfully logged in.

## Problem Description

The provided code snippet shows a typical API route using `unstable_getServerSession` to verify user authentication. Despite successful login, the session object remains null, resulting in an "Unauthorized" error.

## Solution

The solution involves verifying that NextAuth is correctly configured and that the API route is correctly accessing the session.

## How to reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Attempt to access the API route. Observe that the response indicates an unauthorized access even when logged in.