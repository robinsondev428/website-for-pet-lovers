import React, { useContext } from 'react'
import dogvid from './assets/dogEating.mp4'
import HomeJumbotron from '../components/HomeJumbotron'
import Background from '../components/Background'
import CategoryCard from "../components/CategoryCard";
import websiteData from "../utils/SiteData"
import { ClientContext } from "../utils/ClientContext"

export default function Home() {
    const context = useContext(ClientContext)
    console.log(context)
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main>
            <Background src={dogvid} />
            <HomeJumbotron />

            <div className="row">
                {dataset.map((data) => (
                    <div className="col-md-2" key={data.id}>
                    <CategoryCard
                        src={data.link}
                        alt={data.category}
                        category={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}