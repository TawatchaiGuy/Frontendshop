import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel";
import Card from "./components/card";
import Link from "next/link";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
    <Carousel/>
    <br />
    <Card/>
    <br />
    <br/>
    </>
    
  );
}
