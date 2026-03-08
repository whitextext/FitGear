import { Dumbbell } from "lucide-react";
import { useNavigate } from 'react-router-dom';

/**
 * The brand logo component for FitGear.
 * Renders the Dumbbell icon alongside the brand name.
 * Clicking it redirects to the home page.
 */
const Logo = () => {
  const navigate = useNavigate();

  return (
  <div 
    className="flex items-center gap-2 text-2xl text-white font-black italic tracking-tighter cursor-pointer hover:text-red-500 transition-colors select-none"
    onClick={() => navigate('/')}
  >
    <Dumbbell className="text-red-600" fill="currentColor" />
    <span>FITGEAR</span>
  </div>
);
}

export default Logo;