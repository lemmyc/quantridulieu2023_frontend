import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSignUp from "../components/signin-signup/SignInSignUp";
import DashboardReader from "../components/dashboard-reader/DashboardReader";
import BooksReader from "../components/dashboard-reader/BooksReader";
import TicketsReader from "../components/dashboard-reader/TicketsReader";
import FinesReader from "../components/dashboard-reader/FinesReader";
import DashboardLibrarian from "../components/dashboard-librarian/DashboardLibrarian";
import BooksLibrarian from "../components/dashboard-librarian/BooksLibrarian";
import AuthorsLibrarian from "../components/dashboard-librarian/AuthorsLibrarian";

/**
 * MyRouter component
 * @param {v} props
 * @return {jsx}
 */
const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSignUp />} />
                <Route path="/login" element={<SignInSignUp />} />
                <Route path="/dashboard-reader" element={<DashboardReader />} />
                <Route path="/books-reader" element={<BooksReader />} />
                <Route path="/tickets-reader" element={<TicketsReader />} />
                <Route path="/fines-reader" element={<FinesReader />} />
                <Route path="/dashboard-librarian" element={<DashboardLibrarian />} />
                <Route path="/books-librarian" element={<BooksLibrarian />} />
                <Route path="/authors-librarian" element={<AuthorsLibrarian />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;