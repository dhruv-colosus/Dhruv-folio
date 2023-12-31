export default function Cricket() {
  return (
    <>
      {/* <ScrollerMotion> */}
      <main className="flex h-screen w-full items-center justify-center">
        <iframe
          src="//stream.crichd.vip/update/skys2.php"
          width="100%"
          height="500px"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="encrypted-media"
        ></iframe>
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
