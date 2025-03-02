"use client";
import React from "react";
import { create } from "zustand";

// Zustand store to manage form steps, form data, and errors
const useFormStore = create((set) => ({
  step: 1,
  formData: {
    fullName: "",
    email: "",
    discordID: "",
    phone: "",
    nationalID: "",
    university: "",
    studyField: "",
    motivation: "",
    skills: "",
    expertise: "",
    experience: "",
    teamwork: "",
    teamName: "",
    transport: "",
    github: "",
    linkedin: "",
    portfolio: "",
    additional: "",
  },
  errors: {},
  setFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
      errors: { ...state.errors, [field]: "" }, // Clear error when user types
    })),
  validateStep: () => {
    set((state) => {
      let errors = {};

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Phone number validation regex (numbers only)
      const phoneRegex = /^\d+$/;
      // Link validation regex (basic URL check)
      const linkRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

      // Step 1 validation
      if (state.step === 1) {
        if (!state.formData.fullName.trim()) errors.fullName = "Full name is required";
        if (!state.formData.email.trim()) {
          errors.email = "Email is required";
        } else if (!emailRegex.test(state.formData.email)) {
          errors.email = "Invalid email format";
        }
        if (!state.formData.discordID.trim()) errors.discordID = "Discord ID is required";
        if (!state.formData.phone.trim()) {
          errors.phone = "Phone number is required";
        } else if (!phoneRegex.test(state.formData.phone)) {
          errors.phone = "Phone number must contain only numbers";
        }
        if (!state.formData.nationalID.trim()) errors.nationalID = "National ID is required";
        if (!state.formData.university.trim()) errors.university = "University name is required";
        if (!state.formData.studyField.trim()) errors.studyField = "Field of study is required";
      }

      // Step 2 validation
      if (state.step === 2) {
        if (!state.formData.motivation.trim()) errors.motivation = "Motivation is required";
        if (!state.formData.skills.trim()) errors.skills = "Skills are required";
        if (!state.formData.expertise.trim()) errors.expertise = "Expertise is required";
        if (!state.formData.experience.trim()) errors.experience = "Experience is required";
        if (!state.formData.teamwork.trim()) errors.teamwork = "Teamwork experience is required";
        if (!state.formData.teamName.trim()) errors.teamName = "Team name is required";
        if (!state.formData.transport.trim()) errors.transport = "Transport option is required";
      }

      // Step 3 validation
      if (state.step === 3) {
        if (!state.formData.github.trim()) {
          errors.github = "Github link is required";
        } else if (!linkRegex.test(state.formData.github)) {
          errors.github = "Invalid link format";
        }
        if (!state.formData.linkedin.trim()) {
          errors.linkedin = "Linkedin link is required";
        } else if (!linkRegex.test(state.formData.linkedin)) {
          errors.linkedin = "Invalid link format";
        }
      }

      // If there are errors, set them and prevent moving to the next step
      if (Object.keys(errors).length > 0) {
        return { errors };
      }

      // If no errors, clear errors and allow moving to the next step
      return { step: state.step + 1, errors: {} };
    });
  },
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}));

const RegistrationForm = () => {
  const { step, formData, errors, setFormData, validateStep, prevStep } = useFormStore();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      // Validate the final step before submission
      if (validateStep()) {
        console.log("Form submitted successfully!", formData);
        // Add your form submission logic here (e.g., API call)
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-red-900 text-white p-6">
      <header className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">DJEZZY CODE FEST</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <div className="bg-black/50 p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center mb-4">DCF Hackathon Registration</h2>

        <div className="flex justify-center space-x-4 mb-6">
          {[1, 2, 3].map((num) => (
            <span key={num} className={`border-b-4 px-4 ${step === num ? 'border-red-500' : 'border-gray-600'}`}>
              {num}
            </span>
          ))}
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {step === 1 && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData("fullName", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData("email", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Discord ID"
                  value={formData.discordID}
                  onChange={(e) => setFormData("discordID", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.discordID && <p className="text-red-500 text-sm">{errors.discordID}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData("phone", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="National ID Card Number"
                  value={formData.nationalID}
                  onChange={(e) => setFormData("nationalID", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.nationalID && <p className="text-red-500 text-sm">{errors.nationalID}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="School/University Name"
                  value={formData.university}
                  onChange={(e) => setFormData("university", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.university && <p className="text-red-500 text-sm">{errors.university}</p>}
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Year and Field of Study"
                  value={formData.studyField}
                  onChange={(e) => setFormData("studyField", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.studyField && <p className="text-red-500 text-sm">{errors.studyField}</p>}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="col-span-2">
                <textarea
                  placeholder="What motivated you to participate in the Djezzy Code Fest Hackathon?"
                  value={formData.motivation}
                  onChange={(e) => setFormData("motivation", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.motivation && <p className="text-red-500 text-sm">{errors.motivation}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="What are your key technical and soft skills?"
                  value={formData.skills}
                  onChange={(e) => setFormData("skills", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="What is your area of expertise?"
                  value={formData.expertise}
                  onChange={(e) => setFormData("expertise", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.expertise && <p className="text-red-500 text-sm">{errors.expertise}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Have you ever participated in hackathons or worked on similar projects? If so, can you share your experience?"
                  value={formData.experience}
                  onChange={(e) => setFormData("experience", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Do you have experience working in a team or managing projects?"
                  value={formData.teamwork}
                  onChange={(e) => setFormData("teamwork", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.teamwork && <p className="text-red-500 text-sm">{errors.teamwork}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Team Name (Each team must have exactly 4 members)"
                  value={formData.teamName}
                  onChange={(e) => setFormData("teamName", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.teamName && <p className="text-red-500 text-sm">{errors.teamName}</p>}
              </div>
              <div className="relative">
                <div className="p-3 bg-gray-800 rounded w-full h-24 resize-none text-white">
                  Can you ensure your transportation to USTHB on March 16, 2025?
                </div>
                <div className="absolute bottom-2 left-3 flex space-x-4">
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="transport"
                      value="YES"
                      onChange={(e) => setFormData("transport", e.target.value)}
                      className="mr-2"
                    />{" "}
                    YES
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="transport"
                      value="NO"
                      onChange={(e) => setFormData("transport", e.target.value)}
                      className="mr-2"
                    />{" "}
                    NO
                  </label>
                </div>
                {errors.transport && <p className="text-red-500 text-sm">{errors.transport}</p>}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="col-span-2">
                <textarea
                  placeholder="Github Link"
                  value={formData.github}
                  onChange={(e) => setFormData("github", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.github && <p className="text-red-500 text-sm">{errors.github}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Linkedin Link"
                  value={formData.linkedin}
                  onChange={(e) => setFormData("linkedin", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
                {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Portfolio Link"
                  value={formData.portfolio}
                  onChange={(e) => setFormData("portfolio", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Anything to add?"
                  value={formData.additional}
                  onChange={(e) => setFormData("additional", e.target.value)}
                  className="p-3 bg-gray-800 rounded w-full"
                />
              </div>
            </>
          )}
        </form>

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={prevStep} className="bg-gray-600 px-6 py-2 rounded-lg">
              Back
            </button>
          )}
          {step < 3 && (
            <button onClick={validateStep} className="bg-red-600 px-6 py-2 rounded-lg">
              Next
            </button>
          )}
          {step === 3 && (
            <button
              onClick={handleSubmit}
              className="bg-red-600 px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;