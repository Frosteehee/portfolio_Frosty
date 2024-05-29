import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPalette, faGamepad } from '@fortawesome/free-solid-svg-icons';

const ICONS = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  node: <FaNodeJs />,
  database: <FaDatabase />,
  cafe: <FontAwesomeIcon icon={faCoffee} />,
  dessin: <FontAwesomeIcon icon={faPalette} />,
  jeuxVideo: <FontAwesomeIcon icon={faGamepad} />,
};

export default ICONS;
