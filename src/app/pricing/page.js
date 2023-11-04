import HeroText from "@/components/HeroText";

export default function PricingPage(){
    return(
        <div>
            <HeroText
            h1Text={"Check our pricing"}
            h2Text={"Our pricing is very simple"}
            />

        <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
            <h3 className="font-bold text-3xl ">Free</h3>
            <h4>Free Forever</h4>

        </div>
        </div>
    );
}