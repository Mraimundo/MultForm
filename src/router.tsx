import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormStepOne } from './pages/FormStepOne';
import { FormStepTwo } from './pages/FormStepTwo';
import { FormStepThre } from './pages/FormStepThre';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStepOne />} />
        <Route path="/step-two" element={<FormStepTwo />} />
        <Route path="/step-thre" element={<FormStepThre />} />
      </Routes>
    </BrowserRouter>
  )
}