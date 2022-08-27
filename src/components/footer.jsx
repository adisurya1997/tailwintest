import React from 'react';
import {listfooter1} from "../fakedata/datadummy";
import {listfooter2} from "../fakedata/datadummy";
export default function Footer() {

    return (
        <>
            <footer class="text-center text-sm lg:text-left px-48 bg-gray-100 text-gray-600">
                <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                    <div class="mr-12 hidden lg:block">
                    <span>*Rp 69.000/bulan setelah percobaan gratis. Satu paket langganan untuk tiap grup Keluarga Berbagi. Penawaran berlaku selama 3 bulan setelah aktivasi perangkat yang memenuhi syarat. Paket diperbarui otomatis, kecuali dibatalkan. Pembatasan dan syarat lainnya berlaku.</span>
                    </div>
                </div>
                <div class="mx-6 py-10 text-center md:text-left">
                    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="">
                        <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Belanja dan Belajar
                        </h6>
                        {listfooter1.map((item) =>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">{item.name}</a>
                        </p>
                        )}
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Layanan
                        </h6>
                        {listfooter1.map((item) =>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">{item.name}</a>
                        </p>
                        )}
                        <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Akun
                        </h6>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Kelola Id Apple Anda</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">iCloud.com</a>
                        </p>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Untuk Bisnis
                        </h6>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Apple dan Bisnis</a>
                        </p>
                        <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Untuk Pendidikan
                        </h6>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Apple dan Pendidikan</a>
                        </p>
                    </div>
                    <div class="">
                    <h6 class="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                        Nilai-nilai apple
                        </h6>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Aksesibilitas</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Lingkungan</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Privasi</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Tanggung Jawab Pemasok</a>
                        </p>
                        <h6 class="uppercase font-semibold mb-2  flex justify-center md:justify-start">
                        Tentang Apple
                        </h6>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Investor</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Etika & Kepatuhan</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Acara</a>
                        </p>
                        <p class="mb-2">
                        <a href="#!" class="text-gray-600">Hubungi Apple</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="flex p-6 bg-transparent border-t border-gray-300">
                <div class="ac-gf-footer-legal-copyright">Hak cipta ©2022 Apple Inc. Seluruh hak cipta dilindungi undang-undang.</div>
                    <div className='ml-6'>
                        <a className='mx-2 hover:underline' href="#">Kebijakan Privasi</a>
                        <a className='mx-2 hover:underline' href="#">Ketentuan Penggunaan</a>
                        <a className='mx-2 hover:underline' href="#">Legal</a>
                        <a className='mx-2 hover:underline' href="#">Peta Situs</a>
                    </div>
                </div>
            </footer>
        </>
    );
};
