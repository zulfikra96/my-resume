
import Image from "next/image"

interface SkillCardProps {
    name: string,
    percentage: number,
    from_year: any,
    to_year: any
}

interface PortfolioItemProps {
    title:string,
    category:string,
    imgSrc:string
}

const PortfolioItem = (props:PortfolioItemProps) => (
    <div className="col-md-6">
        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <a href="#web-development">
                <figure className="cc-effect"><img src={props.imgSrc} alt="Image" />
                    <figcaption>
                        <div className="h4">{props.title}</div>
                        <p>{props.category}</p>
                    </figcaption>
                </figure>
            </a></div>
    </div>
);

const Portfolio = () => (
    <div className="section" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                    <div className="h4 text-center mb-4 title">Portfolio</div>
                    <div className="nav-align-center">
                        <ul className="nav nav-pills nav-pills-primary" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development"
                                role="tablist"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
                            {/* <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i
                                className="fa fa-picture-o" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist"><i
                                className="fa fa-camera" aria-hidden="true"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                    <div className="ml-auto mr-auto">
                        <div className="row">
                                <PortfolioItem imgSrc={'/images/milulabs.png'} category={'Web Development'} title={'Milulabs Creative Studio'}/>
                                <PortfolioItem imgSrc={'/images/qwork.png'} category={'Web Development'} title={'Qwork.my Malaysia'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const SkillCard = ({ name, percentage, from_year, to_year }: SkillCardProps) => (
    <div className="col-md-6">
        <div className="progress-container progress-primary">
            <span className="progress-badge">{name}</span> &nbsp;
            <small>{from_year} - {to_year}</small>
            <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                    data-aos-duration="2000" role="progressbar" aria-valuemax={60} aria-valuemin={0}
                     style={{ width: `${percentage}%` }}></div><span className="progress-value">{percentage}%</span>
            </div>
        </div>

    </div>
)

const Skill = () => (
    <div className="section" id="skill">
        <div className="container">
            <div className="h4 text-center mb-4 title">Professional Skills</div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                    <div className="row">
                        <SkillCard name="HTML" percentage={90} from_year={2017} to_year={'Present'} />
                        <SkillCard name="CSS" percentage={85} from_year={2017} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="PHP" percentage={70} from_year={2017} to_year={2018} />
                        <SkillCard name="JAVACRIPT" percentage={90} from_year={2017} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="MySQL" percentage={80} from_year={2017} to_year={2019} />
                        <SkillCard name="GIT" percentage={80} from_year={2017} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="PostgreSQL" percentage={85} from_year={2017} to_year={'Present'} />
                        <SkillCard name="Linux Ubuntu" percentage={80} from_year={2017} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="Node.Js" percentage={85} from_year={2018} to_year={'Present'} />
                        <SkillCard name="Express.Js" percentage={85} from_year={2018} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="React.Js" percentage={75} from_year={2021} to_year={'Present'} />
                        <SkillCard name="React Native" percentage={80} from_year={2019} to_year={2020} />
                    </div>
                    <div className="row">
                        <SkillCard name="Redux" percentage={80} from_year={2021} to_year={'Present'} />
                        <SkillCard name="Docker" percentage={75} from_year={2020} to_year={'Present'} />
                    </div>
                    <div className="row">
                        <SkillCard name="Nginx" percentage={75} from_year={2021} to_year={'Present'} />
                        <SkillCard name="Mocha" percentage={80} from_year={2020} to_year={'Present'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="section" id="about">
        <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset="10">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body" style={{ textAlign: 'justify' }}>
                            <div className="h4 mt-0 title">About</div>
                            <p>More than three years of experience as a full-stack software developer. Able to work on front-end developer, back-end developer, mobile developer, and DevOps. And also able to perform unit testing to prevent bugs earlier. I am an enthusiast who learns anything about technology and always be excited to getting new challenge. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">Basic Information</div>
                            <div className="row">
                                <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                <div className="col-sm-8">27</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                <div className="col-sm-8">zulfikralahmudin@gmail.com</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                <div className="col-sm-8">+62 812 166 903 25</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                <div className="col-sm-8">Gorontalo, Indonesia</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                                <div className="col-sm-8">English, Indonesia, Melayu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ProfilePage = () => (
    <div className="profile-page">
        <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
                <div className="page-header-image" data-parallax="true" style={{ backgroundImage: ` url('/images/cc-bg-1.jpg')` }}>
                </div>
                <div className="container">
                    <div className="content-center">
                        <div className="cc-profile-image">
                            <div className="image-wrapper" style={{ width: 180, height: 180 }}>
                                <a href="#">
                                    <Image src="/images/zulfikra.jpg" layout={'responsive'} objectFit={'fill'} width={1} height={1} />
                                </a>
                            </div>
                            {/* <a href="#"><img src="images/anthony.jpg" alt="Image" /></a> */}
                        </div>
                        <div className="h2 title">Zulfikra L Abdjul</div>
                        <p className="category text-white">Full-stack Developer</p><a
                            className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                            data-aos-anchor="data-aos-anchor">Hire Me</a>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" target="_blank" href="https://web.facebook.com/zul.lahmudin/"
                            rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook"></i></a><a
                                className="btn btn-default btn-round btn-lg btn-icon" href="https://github.com/zulfikra96" target="_blank" rel="tooltip"
                                title="Follow me on Github"><i className="fa fa-github"></i></a><a
                                        className="btn btn-default btn-round btn-lg btn-icon" target="_blank" href="https://www.instagram.com/iamzulfikra.lahmudin/" rel="tooltip"
                                        title="Follow me on Instagram"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .image-wrapper a{
                position:relative;
            }
            .image-wrapper{
                margin: 0 auto;
            }
            .image-wrapper img{
                position: relative;
                border-radius: 50%;
                height: 180px;
                width: 180px;
                padding: 0;
                margin: 0;
                border: 15px solid transparent;
                z-index: 9999;
                -webkit-transition: all .3s ease-out;
                transition: all .3s ease-out;
            }
        `}</style>
    </div>
);

const Education = () => (
    <div className="section">
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Education</div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body cc-education-header">
                            <p>2014 - 2019</p>
                            <div className="h5">Bachelor's Degree</div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="h5">Infromatic engineering / Computer Science</div>
                            <p className="category">University of 17 Agustus 1945 Surabaya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Experience = () => (
    <div className="section" id="experience">
        <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">Work Experience</div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body cc-experience-header">
                            <p>Jan 2020 - Present</p>
                            <div className="h5">Qwork.my Malaysia</div>
                            <a href="https://qwork.my"><span style={{ color: '#fff' }}>Visit</span></a>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="h5">Back-end Developer & DevOps Engineer</div>
                            <table className="table">
                                <tr>
                                    <td>-</td>
                                    <td>Develop API to provide data to mobile apps and test it with TDD methodology to prevent bug earlier.</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Config Server for Development environtment and production Environtment</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td> Back up database of application daily to the cloud storage</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Troubleshoot when the application was down and reporting related problem</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Develop static site of company profile</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Develop Admin panel to manage users and an application</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body cc-experience-header">
                            <p>Nov 2019 - Jan 2020</p>
                            <div className="h5">Zevitsoft</div>
                            <a href="http://zevitsoft.simplesite.com/"><span style={{ color: '#fff' }}>Visit</span></a>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="h5">Full-stack Android Developer (React Native & Node.js)</div>
                            <table className="table">
                                <tr>
                                    <td>-</td>
                                    <td>Present about the flow of application which how the application work and train it to client</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Develop android application with clean code and  also Develop REST API  related app.</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Automation testing to the application nor REST API to prevent bug prior to deployment</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body cc-experience-header">
                            <p>Dec 2017 - Oct 2019</p>
                            <div className="h5">PT. Cross Network Indonesia</div>
                            <a href="https://cross.net.id/"><span style={{ color: '#fff' }}>Visit</span></a>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                        <div className="card-body">
                            <div className="h5">Full Stack Developer</div>
                            <table className="table">
                                <tr>
                                    <td>-</td>
                                    <td>Develop internal application to support operational of company nor external application of client</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Manage server and ensure the apps run as well</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Collaborate with government department to develop application that they need</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Design User interface that  desired of client and implement within real application either web application or mobile app or both</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Contact = () => (
    <div className="section" id="contact">
        <div className="cc-contact-information" style={{ backgroundImage: `url('images/staticmap.png')` }}>
            <div className="container">
                <div className="cc-contact">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card mb-0" data-aos="zoom-in">
                                <div className="h4 text-center title">Contact Me</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <form action="https://formspree.io/your@email.com" method="POST">
                                                <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group"><span className="input-group-addon"><i
                                                            className="fa fa-user-circle"></i></span>
                                                            <input className="form-control" type="text" name="name" placeholder="Name"
                                                                required={true} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group"><span className="input-group-addon"><i
                                                            className="fa fa-file-text"></i></span>
                                                            <input className="form-control" type="text" name="Subject" placeholder="Subject"
                                                                required={true} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group"><span className="input-group-addon"><i
                                                            className="fa fa-envelope"></i></span>
                                                            <input className="form-control" type="email" name="_replyto" placeholder="E-mail"
                                                                required={true} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" placeholder="Your Message"
                                                                required={true}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <button className="btn btn-primary" type="submit">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="mb-0"><strong>Address </strong></p>
                                            <p className="pb-2">Central City , Gorontalo City, Gorontalo Province, Indonesia</p>
                                            <p className="mb-0"><strong>Phone</strong></p>
                                            <p className="pb-2">+62 812 166 903 25</p>
                                            <p className="mb-0"><strong>Email</strong></p>
                                            <p>zulfikralahmudin@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PageContent = () => {
    return (
        <div className="page-content">
            <div>
                <ProfilePage />
                <About />
                <Skill />
                <Portfolio />
                <Experience />
                <Education />
                <Contact />
            </div>
        </div>
    )
}

export default PageContent;