import { Footer } from '@/components/Footer';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Account deletion | Aimora',
    description: 'How to delete your Aimora account, what data is erased, what stays on your device and how to request deletion without the app.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/en/account-deletion',
        languages: {
            'pl': '/usuniecie-konta',
            'en': '/en/account-deletion',
        },
    },
};

export default function AccountDeletionPage() {
    return (
        <LegalLayout
            title="Account deletion"
            updatedLabel="Effective from 4 September 2026"
            footer={<Footer />}
        >
            <p>
                This page explains how to delete your account in the <strong>Aimora</strong> mobile
                app (Google Play listing: Aimora, package{' '}
                <code>com.aimora.shootingbuddy</code>) and what data is erased along with it.
            </p>
            <p>
                An account is <strong>optional</strong>. Four game modes — Training, Time Attack,
                Max Hits and Hostage — as well as detector pairing, language and theme selection
                all work without registering or signing in.
            </p>

            <h2>1. Deleting your account in the app</h2>
            <p>If you still have the app installed, this is the fastest route:</p>
            <ol>
                <li>open the side menu and select <strong>Account</strong>,</li>
                <li>scroll to the bottom of the screen and choose <strong>Delete account</strong>,</li>
                <li>confirm with your password.</li>
            </ol>
            <p>
                The password is required because Firebase asks for re-authentication before
                irreversible operations. It stops anyone who picks up an unlocked phone from
                deleting your account.
            </p>

            <h2>2. Deleting your account without the app</h2>
            <p>
                If you have already uninstalled the app or cannot sign in, email{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a> with the subject{' '}
                <strong>“Aimora account deletion”</strong>.
            </p>
            <p>
                Include <strong>the email address the account was registered with</strong>. We act on
                requests sent from that same address, so nobody can delete someone else&apos;s account.
                If you write from a different address, we will ask you to confirm.
            </p>

            <h2>3. What gets deleted</h2>
            <p>Deleting your account erases everything we hold in the cloud:</p>
            <ul>
                <li>sign-in credentials — your email address and password,</li>
                <li>
                    account profile — creation date, last sign-in date, app version and the counter
                    of completed tournaments,
                </li>
                <li>your premium licence status together with the date it was granted,</li>
                <li>
                    the cloud settings backup — default number of detectors, the colours you defined,
                    the names you gave your detectors and your tournament templates.
                </li>
            </ul>
            <p>
                The operation is irreversible. Neither the account nor the settings backup can be
                restored afterwards.
            </p>

            <h2>4. What stays on your device</h2>
            <p>
                Your event history, competitor names, results and organiser logo{' '}
                <strong>never reach our servers</strong> — they live only in the memory of your phone
                or tablet. Deleting your account does not affect them, because we have no access to
                them in the first place.
            </p>
            <p>
                To erase that data as well, <strong>uninstall the app</strong> or clear its data in
                Android settings (Settings → Apps → Aimora → Storage → Clear data).
            </p>

            <h2>5. What we keep despite the deletion</h2>
            <p>After your account is deleted, we retain only what the law requires:</p>
            <ul>
                <li>
                    <strong>accounting records</strong> — invoices and proof of sale for hardware or
                    licences are kept for 5 years from the end of the tax year, as required by Polish
                    accounting and tax law,
                </li>
                <li>
                    <strong>correspondence</strong> — until any claims arising from our contract
                    become time-barred,
                </li>
                <li>
                    <strong>app usage statistics</strong> — stripped of any link to you, in a form
                    that does not allow us to establish whom they concerned.
                </li>
            </ul>
            <p>
                This data no longer serves to operate your account and is not used to contact you.
                The legal basis for keeping it is described in our{' '}
                <a href="/en/privacy-policy">privacy policy</a>.
            </p>

            <h2>6. How long it takes</h2>
            <p>
                Your account and sign-in credentials disappear <strong>immediately</strong> once you
                confirm the operation in the app. Any remaining cloud data is deleted{' '}
                <strong>within 30 days at the latest</strong>, and email requests are handled within
                the same period.
            </p>

            <h2>7. Contact</h2>
            <p>
                The data controller is <strong>Dawid Ostrowski, trading as “DAVOSS”</strong>,
                ul. Leszczynowa 14, 87-125 Osiek nad Wisłą, Poland, VAT ID: 956-22-50-675.
            </p>
            <p>
                For anything concerning account deletion or personal data, write to{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
        </LegalLayout>
    );
}
