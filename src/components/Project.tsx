import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Bhanubathini2002/datacopilot.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bhanubathini2002/datacopilot.git" target="_blank" rel="noreferrer"><h2>Data Copilot</h2></a>
                <p>Data Copilot is an NL‑to‑SQL assistant that converts plain‑English questions into executable SQL, enabling fast, self‑service analytics without requiring users to write queries. It emphasizes correctness through schema-aware prompting and iterative refinement to reduce invalid SQL and improve execution success.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Bhanubathini2002/Gmail_autoreply_finalrepo.git" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bhanubathini2002/Gmail_autoreply_finalrepo.git" target="_blank" rel="noreferrer"><h2>Auto Email</h2></a>
                <p>AUTOEMAIL is an LLM-powered email assistant that turns plain-language requests into polished, context-aware drafts and follow-ups. It uses an agent-style workflow to detect intent (outreach, reply, reminder), apply tone rules, and keep messages consistent across an email thread. Built-in guardrails like PII redaction and action constraints help prevent privacy leaks and unsafe output.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Bhanubathini2002/PRODUCT_RECOMMENDER_SYSTEM.git" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bhanubathini2002/PRODUCT_RECOMMENDER_SYSTEM.git" target="_blank" rel="noreferrer"><h2>Job Day</h2></a>
                <p>JobDay is an NL‑to‑SQL assistant for job-market analytics that converts natural-language questions into executable SQL over a jobs dataset, enabling fast insights without manual querying. It follows a schema-grounded approach to reduce hallucinated tables/columns and improve query correctness.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Bhanubathini2002/1000-AI-projects.git" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bhanubathini2002/1000-AI-projects.git" target="_blank" rel="noreferrer"><h2>1000+ AI Projects</h2></a>
                <p>1000+ real-world projects across NLP, Computer Vision, Reinforcement Learning, Time Series, Recommendation Systems, Generative AI (GANs, Diffusion Models), Graph Neural Networks, and Healthcare AI. Implemented production-ready solutions using PyTorch, TensorFlow, LangChain, and cloud platforms (GCP, Azure, AWS).</p>
            </div>
            <div className="project">
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-92178-0_4" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-92178-0_4" target="_blank" rel="noreferrer"><h2>Conversational AI Research Work</h2></a>
                <p>A CATA 2025 research framework for deploying conversational AI with strong privacy, security, ethical transparency, and harm-prevention guardrails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;