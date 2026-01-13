import Link from 'next/link';

const AfricaAffairsPage = () => {
  return (
    <main className="flex-grow">
      {/* Top Section */}
      <div className="bg-navy text-white p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">AFRICA AFFAIRS DIVISION</h1>
          <p className="mb-4">
            The Africa Affairs Division deals with matters pertaining to relations with 54 countries in the African continent and the African Union (AU).
          </p>
          <p className="mb-4">
            The Division is assigned with the task of following political and socio-economic developments as well as coordinating bilateral relations with these countries.
          </p>
          <p className="mb-4">
            It also directs Sri Lanka’s foreign policy with these countries in the political, economic, security, education and social spheres. Technical cooperation and development assistance, investment relations, tourism and cultural promotion through bilateral, regional and multilateral engagements are part of the responsibilities of the Division.
          </p>
          <p>
            Sri Lanka has 6 resident Missions in the region. (Egypt, South Africa, Nigeria, Kenya, Seychelles, Ethiopia).
          </p>
        </div>
      </div>

      {/* Points of Contact Section */}
      <div className="bg-blue-900 text-white p-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Points of Contact</h2>

          <div className="mb-10">
            <h3 className="text-xl font-bold">Director General</h3>
            <p>Name: Ms. Dilani Weerakoon</p>
            <p>Email: dilani.weerakoon(at)mfa.gov.lk</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">Assistant Director</h3>
              <p>Name: Ms. Dharshika Dasanayake</p>
              <p>Telephone: +94 112 207 208</p>
              <p>Email: darshika.dasanayake(at)mfa.gov.lk</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Assistant Director</h3>
              <p>Name: Ms. M.R.F.Sajeeda</p>
              <p>Telephone: +94 112 207 208</p>
              <p>Email: fathima.sajeeda(at)mfa.gov.lk</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Assistant Director</h3>
              <p>Name: Chathuri Karunarathna</p>
              <p>Telephone: +94 112 207 208</p>
              <p>Email: chathuri.karunarathna(at)mfa.gov.lk</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AfricaAffairsPage;
