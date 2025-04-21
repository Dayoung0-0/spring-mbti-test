import Image from "next/image";
import styles from "./page.module.css";
import Start from './start/page'
import './globals.css';
import Question from "./question/page";
import Result from "./result/page";


export default function Home() {
  return (
    <>
        <Start />
    </>
  );
}
