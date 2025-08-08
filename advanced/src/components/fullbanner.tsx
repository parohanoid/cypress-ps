'use client';

export default function FullBanner() {
    return (
        <div className="container crf-full-banner">
        <div className="row">
            <div className="col d-md-flex align-items-md-stretch flex-md-nowrap">
                <div className="crf-full-banner--image flex-sm-grow-1">
                    <h4 className="d-lg-none">Trail Review</h4>
                </div>
                <div className="crf-full-banner--text d-flex flex-column align-items-center justify-content-center flex-sm-grow-1">
                    <h4>Trail Review</h4>
                    <div>Asphalt</div>
                    <div>National Park</div>
                    <a className="btn btn-default" href="#">See Review</a>
                </div>
            </div>
        </div>
    </div>
    )
}