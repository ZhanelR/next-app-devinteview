import Image from 'next/image';

export default function Banner() {
  return (
    <main>
      <Image 
        src="/images/banner-main-devinterview.webp" 
        alt="Banner" 
        width={800} 
        height={400} 
      />
    </main>
  );
}