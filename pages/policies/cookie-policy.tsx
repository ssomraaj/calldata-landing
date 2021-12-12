const CookiePolicy: React.FC = () => {
  return (
    <div className="pl-4 pr-4 md:pl-16 md:pr-16">
      <div>
        <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold">
          Cookie Policy
        </h1>
        <p className="mt-2 text-center md:text-left text-sm font-light">
          Last updated on 10 Dec 2021
        </p>
      </div>
      <div className="pt-8 pb-16">
        <p className="font-light">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or break certain
          elements of the sites functionality.
        </p>

        <h3 className="pt-6 font-bold">How We Use Cookies ?</h3>
        <p className="pt-6 font-light">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h3 className="pt-6 font-bold">Disabling Cookies</h3>
        <p className="pt-6 font-light">
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <h3 className="pt-6 font-bold">The Cookies We Set</h3>
        <p className="pt-6 font-light">
          In order to provide you with a great experience on this site we
          provide the functionality to set your preferences for how this site
          runs when you use it. We will pre-download the images on pages you
          visit, the data you load for enhanced and optimised user experiences.
          In order to remember your preferences we need to set cookies so that
          this information can be called whenever you interact with a page is
          affected by your preferences.
        </p>

        <h3 className="pt-6 font-bold">Third Party Cookies</h3>
        <p className="pt-6 font-light">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
          <br />
          <br />
          This site uses Google Analytics which is one of the most widespread
          and trusted analytics solution on the web for helping us to understand
          how you use the site and ways that we can improve your experience.
          These cookies may track things such as how long you spend on the site
          and the pages that you visit so we can continue to produce engaging
          content. For more information on Google Analytics cookies, see the
          official Google Analytics page.
        </p>

        <h3 className="pt-6 font-bold">More Information</h3>
        <p className="pt-6 font-light">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you are not sure whether you need
          or not it is usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
