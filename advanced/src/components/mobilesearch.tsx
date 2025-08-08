'use client';

export default function MobileSearch() {
    return (
        <section className="header-nav--search d-block d-sm-block d-md-none">
            <form className="form-inline form-inline">
                <input aria-label="Search" className="form-control" placeholder="What can we help you find?" type="search" />
            </form>
        </section>
    )
}