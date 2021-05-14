import React from 'react'
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import '../assets/styles/scss/index.scss';

const Home = ({ data }) => {
  const { site, allFile, allMarkdownRemark } = data;
  const [markDownData, ] = allMarkdownRemark.edges;
  return (
    <Layout>
      <div className='columns is-centered is-vcentered is-mobile is-multiline'>
        <div className='column is-11-mobile is-8-tablet is-half-desktop is-6-fullhd is-6-widescreen'>
          <h2 className='title is-2 has-text-centered'>{site.siteMetadata.title}</h2>
          <div className='buttons is-justify-content-center'>
            <Link to='/clock' className='button is-link is-light'>Go to Clock</Link>
            <Link to='/counter' className='button is-link'>Go to Counter</Link>
          </div>
        </div>
        <div className='column is-12 mt-3'>
          <h2 className='title is-3 has-text-centered'>{markDownData.node.frontmatter.title}</h2>
          <div className='table-container'>
            <table className='table is-hoverable is-striped'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Extension</th>
                  <th>Size</th>
                  <th>Path</th>
                  <th>Birth Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  allFile.edges.map(({ node }, i) => {
                    const { name, extension, prettySize, absolutePath, birthTime } = node;
                    return (
                      <tr key={i.toString()}>
                        <td>{name}</td>
                        <td>{extension}</td>
                        <td>{prettySize}</td>
                        <td>{absolutePath}</td>
                        <td>{birthTime}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.any,
}

export const query = graphql`
  query mainQuery {
    site {
      siteMetadata {
        title
      }
    }

    allFile {
      edges {
        node {
          name
          extension
          prettySize
          absolutePath
          birthTime(locale: "es")
        }
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Home;