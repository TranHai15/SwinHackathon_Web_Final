export default function About() {
  return (
    <div className="container mx-auto p-4">
      <main>
        {/* Hero Section */}
        <section className="hero bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-lg">
            We are a team of four passionate web developers dedicated to creating
            cutting-edge PCB detection solutions. Our team consists of:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li className="text-lg">
              [Phuong Thao Nguyen] - Website Developer
            </li>
            <li className="text-lg">
              [Thien Hao Nguyen] - AI Developer
            </li>
            <li className="text-lg">
              [Dinh Dang Bui] - AI Developer
            </li>
            <li className="text-lg">
              [Minh Quang Nguyen] - AI Developer
            </li>
          </ul>
          <p className="text-lg mt-4">
            Together, we strive to develop reliable and efficient tools that help
            engineers and PCB designers identify potential issues and optimize
            their designs.
          </p>
        </section>

        {/* Getting Started Section */}
        <section className="getting-started mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-lg">
              Register an account on our website.
            </li>
            <li className="text-lg">
              Log in to your account and select the PCB checking service.
            </li>
            <li className="text-lg">
              Upload/Record your PCB circuits and select the checking options,
              such as camera or image.
            </li>
            <li className="text-lg">
              View the checking results.
            </li>
          </ol>
        </section>

        {/* Features Section */}
        <section className="features mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Stories</h2>
          <p className="text-lg mt-4">
            In recent years, the industry has become more and more complex, Moreover, the demand for PCB checking services has increased exponentially.
            With our user-friendly interface and state-of-the-art technology, we are committed to helping PCB designers and engineers identify issues quickly and effectively.
            Our team is always on the lookout for new and innovative ways to improve our services.
            We are dedicated to providing the best PCB checking services to our customers.
          </p>
        </section>        
      </main>

      <footer className="text-center mt-10">
        <p className="text-sm">
          &copy; 2024 PCB Checking. All rights reserved.
        </p>
      </footer>
    </div>
  );
}