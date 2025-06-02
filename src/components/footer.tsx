import Link from 'next/link';
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-10 md:px-5 md:py-1">
        <div className="grid grid-cols-2 md:px-10 md:mt-15">
          <div>
            <h1 className=" text-2xl text-start">ASSETHUB</h1>
          </div>
          <div className="flex items-center justify-center md:justify-end -mt-2 pr-2">
            <img
              src="https://github.com/Bimbim15/lolhuman/blob/master/css/Group%202.png?raw=true"
              alt="Logo"
              decoding="async"
              className="w-30 h-16"
            />
          </div>
        </div>

        <div className="mt-16 border-t pt-5 text-center text-sm text-muted-foreground"></div>
        <div className="grid gap-8 md:gap-15 md:px-5 grid-cols-2 md:grid-cols-6">
          <div className="space-y-4 ">
            <h3 className="text-lg font-bold pl-5">Ikuti Kami</h3>
            <div className="space-y-4">
              <a
                href="https://facebook.com/prop2goapi"
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="md:w-13 w-8 h-5 md:h-8"
                />
                <p className="text-sm">@prop2goapi</p>
              </a>
              <a
                href="https://instagram.com/prop2goapi"
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="Instagram"
                  className="md:w-13 w-8 h-5 md:h-8"
                />
                <p className="text-sm">@prop2goapi</p>
              </a>
              <a
                href="https://youtube.com/prop2goapi"
                className="flex pl-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube"
                  className="md:w-11 w-8 h-5 md:h-7"
                />
                <p className="text-sm pl-0.5">@prop2goapi</p>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Temukan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/lelang" className="text-sm text-muted-foreground">
                  Lelang
                </a>
              </li>
              <li>
                <a href="/cessie" className="text-sm text-muted-foreground">
                  Cessie
                </a>
              </li>
              <li>
                <a href="/ajb" className="text-sm text-muted-foreground">
                  AJB
                </a>
              </li>
              <li>
                <a href="/sewa" className="text-sm text-muted-foreground">
                  Sewa
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Link</h3>
            <div className="space-y-2">
              <ul>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan"
                    className="text-sm text-muted-foreground"
                  >
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang-kami"
                    className="text-sm text-muted-foreground"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portofolio"
                    className="text-sm text-muted-foreground"
                  >
                    Portofolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galeri"
                    className="text-sm text-muted-foreground"
                  >
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hubungi-kami"
                    className="text-sm text-muted-foreground"
                  >
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/daftar-masuk"
                    className="text-sm text-muted-foreground"
                  >
                    Daftar/Masuk
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Hubungi Kami!</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">admin@prop2go.com</p>
              <p className="text-sm text-muted-foreground">(123) 456-7890</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Alamat Kami</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                PT Agent Properti Indonesia
                <br />
              </p>
              <p className="text-sm text-muted-foreground">
                Jl.Raya Duri Kosambi No.32B
              </p>
              <p className="text-sm text-muted-foreground">
                Kosambi, Cengkareng.
              </p>
              <p className="text-sm text-muted-foreground">Jakarta Barat</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Download Aplikasi</h4>
            <div className="space-y-2">
              <div>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Bimbim15/lolhuman/blob/master/css/App%20Store.png?raw=true"
                    alt="App Store"
                    className="w-40 h-13"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <img
                    src="https://github.com/Bimbim15/lolhuman/blob/master/css/Group.png?raw=true"
                    alt="Google Play"
                    className="w-40 h-13"
                  />
                </a>
              </div>
              <div className="flex justify-start md:justify-end mt-3 pr-10">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <img
                    src="https://github.com/Bimbim15/lolhuman/blob/master/css/Mask%20group%20(1).png?raw=true"
                    alt="Google Play"
                    className="w-15 h-13"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 border-t pt-5 text-center text-sm text-muted-foreground">
          Copyright © 2025. PT Agent Properti Indonesia
        </div>
      </div>
    </footer>
  );
}
