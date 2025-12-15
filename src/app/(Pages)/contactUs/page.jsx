import Image from "next/image";
import cricketImage from "../../../Assets/cricket.jpg"
const ContactUs = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="flex gap-20">
        <img src="https://i.ibb.co.com/3ycdXJZQ/slide5.jpg" alt="" srcset="" />
        <Image
          width={500}
          height={500}
          alt="Vegetables"
          src="https://scontent.fcgp1-2.fna.fbcdn.net/v/t39.30808-1/480669408_1367925967903865_6679605685828508468_n.jpg?stp=c0.412.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHzjf5SaHWV2WekTuL7VloOzr879EBeXSPOvzv0QF5dI7EhPzrX23N7A0SCmvNLLJqxrAcNQt4PzM6abfhoKNs4&_nc_ohc=Xda9R4v0qVQQ7kNvwHYeez5&_nc_oc=Adnmf3po1GnDY0Dwl1GhpheGaTCySM5dppo2EAUSdrV9n7cY3Z4Mn2lkhHswBP5flpk&_nc_zt=24&_nc_ht=scontent.fcgp1-2.fna&_nc_gid=layPdD5ifAus9OXYbLBWYA&oh=00_AfkRtT1nqFjMHVHD8IxZGH7dEHpm044FWzBC8i8vgryxSA&oe=69460AB9"
        ></Image>
        <Image
            src={cricketImage}
        />
      </div>
    </div>
  );
};

export default ContactUs;
