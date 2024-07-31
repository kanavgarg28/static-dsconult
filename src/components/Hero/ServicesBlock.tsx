import React from 'react';

const ServicesBlock:React.FC = () => {
  // const redirectTo = (url: string) => {
  //   window.location.href = url;
  // };

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex gap-5">
                <div
                  className="bg-white border border-gray-200 p-6 w-96 text-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                  // onClick={() => redirectTo('share-transfer-recovery.html')}
                >
                  <h3 className="text-xl font-semibold mb-3">Share Transfer Recovery</h3>
                  <p className="text-gray-600">Unlock seamless share transfers with 'Shares Recover'! Effortlessly navigate signature mismatches, lost shares, and more.</p>
                  <a href="share-transfer-recovery.html" className="text-blue-500 font-bold mt-3 inline-block">Learn More</a>
                </div>
                <div
                  className="bg-white border border-gray-200 p-6 w-96 text-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                  // onClick={() => redirectTo('transmission-of-shares-recover.html')}
                >
                  <h3 className="text-xl font-semibold mb-3">Transmission Of Shares Recover</h3>
                  <p className="text-gray-600">Facilitating seamless transmission of share ownership to legal heirs. Ensure a smooth transition with mandatory legal documents.</p>
                  <a href="transmission-of-shares-recover.html" className="text-blue-500 font-bold mt-3 inline-block">Learn More</a>
                </div>
                <div
                  className="bg-white border border-gray-200 p-6 w-96 text-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                  // onClick={() => redirectTo('issue-duplicate-shares.html')}
                >
                  <h3 className="text-xl font-semibold mb-3">Issue Duplicate Shares</h3>
                  <p className="text-gray-600">Reclaim lost shares to your demat! Trust 'Shares Recover' for swift duplicate share certificates.</p>
                  <a href="issue-duplicate-shares.html" className="text-blue-500 font-bold mt-3 inline-block">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
