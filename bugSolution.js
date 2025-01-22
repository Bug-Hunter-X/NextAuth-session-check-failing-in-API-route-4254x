```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // Ensure that authOptions is correctly configured to reflect your provider(s) and secrets
  console.log(session);
  res.status(200).json({ message: 'Authorized', session });
}
```