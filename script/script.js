let interviewList = [];
let rejectedList = [];
let currentStatus = "all-cards";

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(clickedId) {
  const buttons = [allBtn, interviewBtn, rejectedBtn];

  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary", "text-white");
    btn.classList.add(
      "bg-white",
      "border-gray-200",
      "text-gray-600",
      "hover:bg-gray-50",
    );
  });

  const selectedBtn = document.getElementById(clickedId);
  selectedBtn.classList.remove(
    "bg-white",
    "border-gray-200",
    "text-gray-600",
    "hover:bg-gray-50",
  );
  selectedBtn.classList.add("btn-primary", "text-white");

  if (clickedId == "interview-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (clickedId == "all-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (clickedId == "rejected-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn-1")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode
      .querySelector(".company-name")
      .innerText.trim();
    const jobRole = parentNode.querySelector(".job-role").innerText.trim();
    const jobLocation = parentNode
      .querySelector(".job-location")
      .innerText.trim();
    const jobType = parentNode.querySelector(".job-type").innerText.trim();
    const jobSalary = parentNode.querySelector(".job-salary").innerText.trim();

    parentNode.querySelector(".job-status").innerText = "Interviewing";

    const jobInfo = {
      companyName,
      jobRole,
      jobLocation,
      jobType,
      jobSalary,
      jobStatus: "Interviewing",
    };

    const jobExist = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );

    if (!jobExist) {
      interviewList.push(jobInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    calculateCount();

    const activeTab = document.querySelector(".btn-primary").id;
    if (activeTab === "interview-btn") renderInterview();
    if (activeTab === "rejected-btn") renderRejected();
  } else if (event.target.classList.contains("rejected-btn-1")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode
      .querySelector(".company-name")
      .innerText.trim();
    const jobRole = parentNode.querySelector(".job-role").innerText.trim();
    const jobLocation = parentNode
      .querySelector(".job-location")
      .innerText.trim();
    const jobType = parentNode.querySelector(".job-type").innerText.trim();
    const jobSalary = parentNode.querySelector(".job-salary").innerText.trim();

    parentNode.querySelector(".job-status").innerText = "Rejected";

    const jobInfo = {
      companyName,
      jobRole,
      jobLocation,
      jobType,
      jobSalary,
      jobStatus: "Rejected",
    };

    const jobExist = rejectedList.find(
      (item) => item.companyName == jobInfo.companyName,
    );

    if (!jobExist) {
      rejectedList.push(jobInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    calculateCount();

    const activeTab = document.querySelector(".btn-primary").id;
    if (activeTab === "rejected-btn") renderRejected();
    if (activeTab === "interview-btn") renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  // Empty State Check
  if (interviewList.length === 0) {
    filterSection.innerHTML = `
      <div class="flex flex-col items-center justify-center py-32 bg-white border border-gray-100 shadow-sm rounded-xl w-full">
        <img src="jobs.png" alt="No jobs available" class="w-16 h-16 mb-4">
        <h3 class="text-xl font-bold text-[#1e293b] mb-2">No jobs available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>`;
    return;
  }

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="job-card bg-white border border-gray-100 shadow-sm rounded-xl p-6 relative group mb-4">
        <button class="btn btn-circle btn-sm btn-ghost absolute top-4 right-4 text-gray-400 hover:text-red-500 border border-gray-200"></button>
        <h3 class="company-name text-lg font-bold text-[#1e293b]">${interview.companyName}</h3>
        <p class="job-role text-gray-500 mb-2">${interview.jobRole}</p>
        <p class="text-sm text-gray-400 mb-4">
          <span class="job-location">${interview.jobLocation}</span> •
          <span class="job-type">${interview.jobType}</span> •
          <span class="job-salary">${interview.jobSalary}</span>
        </p>
        <span class="job-status inline-block bg-green-50 text-green-600 px-3 py-1 rounded-md text-xs font-bold mb-4">${interview.jobStatus}</span>
        <p class="text-sm text-gray-600 mb-6">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        <div class="flex gap-3">
          <button class="interview-btn-1 btn btn-sm btn-outline btn-success normal-case font-bold px-6">INTERVIEW</button>
          <button class="rejected-btn-1 btn btn-sm btn-outline btn-error normal-case font-bold px-6">REJECTED</button>
        </div>
      </div>
    `;
    filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = "";

  // Empty State Check
  if (rejectedList.length === 0) {
    filterSection.innerHTML = `
      <div class="flex flex-col items-center justify-center py-32 bg-white border border-gray-100 shadow-sm rounded-xl w-full">
        <img src="jobs.png" alt="No jobs available" class="w-16 h-16 mb-4">
        <h3 class="text-xl font-bold text-[#1e293b] mb-2">No jobs available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>`;
    return;
  }

  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="job-card bg-white border border-gray-100 shadow-sm rounded-xl p-6 relative group mb-4">
        <button class="btn btn-circle btn-sm btn-ghost absolute top-4 right-4 text-gray-400 hover:text-red-500 border border-gray-200"></button>
        <h3 class="company-name text-lg font-bold text-[#1e293b]">${reject.companyName}</h3>
        <p class="job-role text-gray-500 mb-2">${reject.jobRole}</p>
        <p class="text-sm text-gray-400 mb-4">
          <span class="job-location">${reject.jobLocation}</span> •
          <span class="job-type">${reject.jobType}</span> •
          <span class="job-salary">${reject.jobSalary}</span>
        </p>
        <span class="job-status inline-block bg-red-50 text-red-600 px-3 py-1 rounded-md text-xs font-bold mb-4">${reject.jobStatus}</span>
        <p class="text-sm text-gray-600 mb-6">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        <div class="flex gap-3">
          <button class="interview-btn-1 btn btn-sm btn-outline btn-success normal-case font-bold px-6">INTERVIEW</button>
          <button class="rejected-btn-1 btn btn-sm btn-outline btn-error normal-case font-bold px-6">REJECTED</button>
        </div>
      </div>
    `;
    filterSection.appendChild(div);
  }
}
