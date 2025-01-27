import React from 'react';
import Oracle from '../../assest/image/oracle.png';
import Samsung from '../../assest/image/samsung.png';
import Morpheus from '../../assest/image/morpheus.png';
import Segment from '../../assest/image/segment.png';
import Monday from '../../assest/image/monday.png';
export default function TrustedBy() {


    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">Trusted By Over 100+ Startups and freelance business</h2>

                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Oracle}
                                alt="Oracle Logo"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Morpheus}
                                alt="Morpheus Logo"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Morpheus}
                                alt="Morpheus Logo 2"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Samsung}
                                alt="Samsung Logo"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Monday}
                                alt="Monday.com Logo"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="px-3">
                            <img
                                src={Segment}
                                alt="Segment Logo"
                                width={180}
                                height={60}
                                className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

