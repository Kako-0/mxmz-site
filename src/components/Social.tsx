import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedinIn } from "react-icons/fa";

const medias = [
  {
    name: 'facebook',
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/maximizeag/',
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/maximizeag/',
  },
  // {
  //     name: 'linkedin',
  //     icon: <FaLinkedinIn />,
  //     url: 'https://www.linkedin.com/company/maximizeag/',
  // },
];

type SocialProps = {
  styleContainer?: string;
  styleIcon?: string;
};

export default function Social({ styleContainer, styleIcon }: SocialProps) {
  return (
    <div className="flex items-center">
      <ul className={styleContainer}>
        {medias.map((media) => (
          <li key={media.name} className="nav__link relative py-2">
            <Link
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className={` text-[18px] text-accent ${styleIcon}`}
            >
              {media.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
