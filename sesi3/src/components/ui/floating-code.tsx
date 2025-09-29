'use client';

import {motion} from "framer-motion";

export default function FloatingCode(){
    return(
       <motion.div className="absolute right-[5%] top-[20%] hidden lg:block">
            <motion.div animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card p-4 max-w-[300px] text-xs" >
                <pre>
{`const Portofolio = () => {

    const [skills, setSkills] = useState([
        'React', 'Python', 'Java',
        'SQL', 'Machine Learning'
    ]);

    return (
        <div className="awesome-portofolio">
        {/* Your dream website */}
        </div>
    );
};`}
                </pre>
            </motion.div>
       </motion.div>
    )
}