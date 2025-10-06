'use client';

export default function BuyPage() {
    return (
        <div className="bg-neutral-200 flex flex-col md:flex-row md:items-center     gap-8 justify-between px-8 md:px-32 py-8" >
            <div className="text-center flex flex-col ">
                <h1 className="text-5xl font-bold">BUY $COOK</h1>
                <h1 className="text-4xl font-bold">ON VOLTICHARGE</h1>
            </div>

            <div>
                <iframe
                    src="https://voltichange.net/api/widget/?chain=56&darktheme=false&tokenin=&tokenout=0x6B63BdD1Faf16A8EBa9b06ae6dBD2cc15ba31466&slippage=6"
                    frameborder="0"
                    class="voltichange-widget">
                </iframe>

            </div>
        </div>
    );
}