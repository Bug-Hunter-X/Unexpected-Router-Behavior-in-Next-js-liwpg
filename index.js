```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    //Check if the router is ready
    if (router.isReady) {
      router.push('/'); 
    } else {
      //Handle the case when the router isn't ready
      console.log("Router isn't ready yet");
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```