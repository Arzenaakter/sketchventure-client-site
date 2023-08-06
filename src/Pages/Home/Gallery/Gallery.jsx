
import { motion } from "framer-motion";

const Gallery = () => {
    const gallery = [
        {
            id: '1',
            img: 'https://img.freepik.com/free-photo/group-young-artist-girls-having-draw-lesson-art-studio_839833-2606.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais'
        },
        {
            id: '2 ',
            img: 'https://img.freepik.com/free-photo/artist-family_53876-46862.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais'
        },
        {
            id: '3',
            img:'https://t4.ftcdn.net/jpg/05/43/10/25/240_F_543102563_jGH7DCIFZUztM10ZevkAkRzIRr32rncr.jpg'
        },
        {
            id: '4',
            img:'https://t4.ftcdn.net/jpg/04/39/15/05/240_F_439150521_wbZs5Dy0UZcszpWCipZ1kAG23hSljl5W.jpg'
        },
        {
            id: '5',
            img:'https://t3.ftcdn.net/jpg/00/07/33/24/240_F_7332486_Q3TdhdmgEv4iUo63l4N8FJ2CfRBTO64e.jpg'
        },
        {
            id: '6',
            img:'https://t4.ftcdn.net/jpg/06/07/65/39/240_F_607653929_Qw6A5lEOqa6sS6hOlFOzYs2uvXXP3eXi.jpg'
        }
    ];
    return (
        <section>
            
            <motion.h3 className="text-3xl  font-bold text-center mb-5 mt-10 " initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1.5}}>Gallery</motion.h3>
                
            <div className="container mx-auto lg:px-0 px-10 my-10">
                <div  className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
                    {gallery.map((item, index) => (
                        <motion.div className="w-full " key={index}  whileHover={{scale: 1.2}} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} transition={{duration: 1.5}}>
                            <img src={item.img} className="w-full " alt=""/>
                        </motion.div>
                    ))}
                </div>
        

            </div>
            
        </section>
    );
};

export default Gallery;