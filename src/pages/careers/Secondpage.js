import React, { Component } from "react";
import "./Secondpage.css";
import { FaSearch, FaMapMarkerAlt, FaCity } from "react-icons/fa";

class SecondPage extends Component {
  state = {
    jobs: [
      {
        id: 1,
        title: "UI/UX Designer",
        description:
          "We Are Seeking A Talented UI/UX Designer To Create Intuitive, User-Centered Designs For Web And Mobile Applications.",
        location: "Egypt",
        type: "Full Time",
        status: "Actively Recruiting",
      },
      {
        id: 2,
        title: "Brand Partnership Manager",
        description:
          "We Are Seeking A Talented Brand Partnership Manager To Collaborate With Product Teams To Expand Our Global Presence.",
        location: "China",
        type: "Full Time",
        status: "Actively Recruiting",
      },
      {
        id: 3,
        title: "Sports Journalist",
        description:
          "We Are Seeking A Talented Sports Journalist To Cover Key Sporting Events And Develop Insightful Analysis.",
        location: "USA",
        type: "Full Time",
        status: "Closed",
      },
      {
        id: 4,
        title: "UI/UX Designer",
        description:
          "We Are Seeking A Talented UI/UX Designer To Create Intuitive, User-Centered Designs For Web And Mobile Applications.",
        location: "Egypt",
        type: "Full Time",
        status: "Actively Recruiting",
      },
    ],
    search: "",
    filterLocation: "",
    filterCity: "",
    filteredJobs: [],
  };

  componentDidMount() {
    this.setState({ filteredJobs: this.state.jobs });
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value }, this.filterJobs);
  };

  handleLocationChange = (e) => {
    this.setState({ filterLocation: e.target.value }, this.filterJobs);
  };

  handleCityChange = (e) => {
    this.setState({ filterCity: e.target.value }, this.filterJobs);
  };

  filterJobs = () => {
    const { search, filterLocation, filterCity, jobs } = this.state;
    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
        job.type.toLowerCase().includes(filterCity.toLowerCase())
    );
    this.setState({ filteredJobs });
  };

  render() {
    const { filteredJobs } = this.state;

    return (
      <div className="main-container">
        <div className="title-container">
          <h1>Join Our Team Today!</h1>
          <div className="search-bar">
            <div className="search-input">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Job Title or Skills"
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="search-input">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                placeholder="Country"
                value={this.state.filterLocation}
                onChange={this.handleLocationChange}
              />
            </div>
            <div className="search-input">
              <FaCity className="search-icon" />
              <input
                type="text"
                placeholder="City"
                value={this.state.filterCity}
                onChange={this.handleCityChange}
              />
            </div>
            <button onClick={this.filterJobs}>Search</button>
          </div>
        </div>

        <div className="job-list">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`job-card ${job.status === "Closed" ? "closed" : ""}`}
            >
              <div className="job-header">
                <h3>
                  <span>{job.title}</span>
                </h3>
                <p className="status">{job.status}</p>
              </div>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Job Type:</strong> {job.type}
              </p>
              <p>{job.description}</p>
              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SecondPage;
