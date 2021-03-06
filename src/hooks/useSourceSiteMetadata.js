import { useStaticQuery, graphql } from "gatsby";

const useSourceSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          siteUrl
          githubLedger
          contacts {
            github
            telegram
            discord
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSourceSiteMetadata;
