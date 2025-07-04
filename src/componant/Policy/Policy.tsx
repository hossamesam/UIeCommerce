import Group from "../../assets/policy/Group.svg";
import trophy from "../../assets/policy/trophy 1.svg";
import Shipping from "../../assets/policy/Shipping.svg";
import Support from "../../assets/policy/Support.svg";
function Policy() {
    return (
        <div className="bg-PlaceboSnow-400 w-full flex  justify-center py-4 border border-dashed border-KettlemanGrey-100">
            <div className="grid grid-cols-4 gap-12 px-2 max-md:grid-cols-2 max-md:gap-6">
                <div className="flex items-center gap-3">
                    <img src={trophy} alt="High Quality" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">High Quality</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">crafted from top materials</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Group} alt="Warranty Protection" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">Warranty Protection</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Over 2 years</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Shipping} alt="Free Shipping" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">Free Shipping</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Order over 150 $</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Support} alt="24 / 7 Support" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">24 / 7 Support</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Dedicated support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Policy
