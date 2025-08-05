# PluralPaths ✈️🌍  
**Inclusive, AI-powered travel planning for everyone — regardless of background, dietary needs, or travel preferences.**

PluralPaths empowers users from all walks of life to effortlessly generate personalised itineraries that accommodate unique needs — whether it’s halal-friendly food, mobility-aware attractions, or off-the-beaten-path interests. By using a fine-tuned LLM to interpret structured inputs, the platform ensures that your travel experience reflects who you are, not just where you're going.

Whether you're vegan, budget-conscious, or seeking culturally immersive experiences, PluralPaths adapts to your preferences — and generates a journey that’s truly your own.

---

## 🚀 Features

- **Form-Based Trip Planning**  
  Users submit structured inputs (e.g. destination, duration, budget), which (together with their saved travel preferences) are converted into optimised prompts on the backend.

- **LLM-Powered Itinerary Generation**  
  Backend-generated prompts are passed to a fine-tuned Hugging Face Transformer to produce realistic itineraries with contextual relevance.

- **Flight Data Integration**  
  Retrieves flight options via API, with serverless caching (AWS Lambda + EventBridge + Redis) to reduce API cost and latency.

- **User Accounts & Persistence**  
  PostgreSQL schema supports account creation, itinerary saving, and preference management.

- **Cloud-Native, Containerized Deployment**  
  Hosted on AWS (S3 + EC2) and containerised with Docker for local and production environments.

---

## 🧱 Tech Stack

| Layer            | Stack                                                                 |
|------------------|-----------------------------------------------------------------------|
| **Frontend**     | React, TypeScript                                                     |
| **Backend**      | Node.js, Express.js, Python                                           |
| **AI/ML**        | PyTorch, Hugging Face Transformers, Inference API                     |
| **Database**     | PostgreSQL                                                            |
| **Caching**      | Redis (ElastiCache), AWS Lambda, EventBridge                          |
| **Infra/DevOps** | Docker, AWS S3, EC2, GitHub Actions                                   |

---

## 🧠 Sample Input → Output Flow

| Input Field              | Example                     |
|--------------------------|-----------------------------|
| Destination              | Tokyo, Japan                |
| Start Date               | 12/11/25                    |
| End Date                 | 16/11/25                    |
| Budget                   | Medium                      |

> 🛠️ Backend generates a contextual prompt and sends it to the LLM.  
> ✅ Output: JSON itinerary with day-wise suggestions, locations, activity notes, and timings.

---

## 🔜 Roadmap

- [ ] Initialise repo, Docker setup & CI/CD pipeline  
- [ ] Design database schema, auth & form-to-prompt builder  
- [ ] Add flight/location data integration with AeroDataBox API and caching  
- [ ] Train and fine-tune LLM on curated itinerary datasets  
- [ ] Integrate LLM via Hugging Face Inference API  
- [ ] Build itinerary UI, persistence & “My Saved Trips” flow  
- [ ] Enable in-app editing of saved itineraries (CRUD operations)  
- [ ] Enhance UX: maps, filters & accessibility  
- [ ] Provision infra (IaC), deploy & add monitoring/testing  

---

## 📦 Setup Instructions (WIP)

```bash
git clone https://github.com/bentanj/pluralpaths.git
cd pluralpaths
# Setup and run frontend/backend containers (WIP)
```

---

## 👤 Author

**Ben Tan Kiat**  
[🔗 LinkedIn](https://www.linkedin.com/in/ben-tan-kiat)  
[💻 GitHub](https://github.com/bentanj)
